import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Send, Sparkles, Check } from 'lucide-react';
import { products } from '../data/products';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  type: 'inquiry' | 'custom';
  productId?: string;
}

export const ContactForm = () => {
  const { register, handleSubmit, reset, watch, formState: { errors, isSubmitting } } = useForm<ContactFormData>();
  const [isSuccess, setIsSuccess] = useState(false);
  const formType = watch('type');

  const customizableProducts = products.filter(p => p.isCustomizable);

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log(data);
      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif mb-4 text-gray-900 dark:text-white">
            Kontaktieren Sie uns
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Haben Sie Fragen oder Wünsche? Wir sind für Sie da.
          </p>
        </div>

        <form 
          onSubmit={handleSubmit(onSubmit)} 
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 space-y-6 transform transition-all duration-300 hover:shadow-2xl"
        >
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Name
            </label>
            <input
              {...register('name', { required: 'Name ist erforderlich' })}
              className={`
                w-full px-4 py-3 rounded-lg border 
                ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} 
                bg-white dark:bg-gray-700
                text-gray-900 dark:text-gray-100
                focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400
                transition-all duration-300
                dark:placeholder-gray-400
              `}
              placeholder="Ihr Name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1 animate-fadeIn">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Email
            </label>
            <input
              type="email"
              {...register('email', { 
                required: 'Email ist erforderlich',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Bitte geben Sie eine gültige Email-Adresse ein'
                }
              })}
              className={`
                w-full px-4 py-3 rounded-lg border 
                ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}
                bg-white dark:bg-gray-700
                text-gray-900 dark:text-gray-100
                focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400
                transition-all duration-300
                dark:placeholder-gray-400
              `}
              placeholder="ihre.email@beispiel.ch"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1 animate-fadeIn">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Anfrageart
            </label>
            <select
              {...register('type')}
              className={`
                w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600
                bg-white dark:bg-gray-700
                text-gray-900 dark:text-gray-100
                focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400
                transition-all duration-300
              `}
            >
              <option value="inquiry">Allgemeine Anfrage</option>
              <option value="custom">Spezialanfertigung</option>
            </select>
          </div>

          {formType === 'custom' && (
            <div className="space-y-2 animate-fadeIn">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Produkt zur Personalisierung
              </label>
              <select
                {...register('productId')}
                className={`
                  w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600
                  bg-white dark:bg-gray-700
                  text-gray-900 dark:text-gray-100
                  focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400
                  transition-all duration-300
                `}
              >
                <option value="">Bitte wählen Sie ein Produkt</option>
                {customizableProducts.map(product => (
                  <option key={product.id} value={product.id}>
                    {product.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Ihre Nachricht
            </label>
            <textarea
              {...register('message', { required: 'Nachricht ist erforderlich' })}
              rows={5}
              className={`
                w-full px-4 py-3 rounded-lg border 
                ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'}
                bg-white dark:bg-gray-700
                text-gray-900 dark:text-gray-100
                focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400
                transition-all duration-300
                resize-none
                dark:placeholder-gray-400
              `}
              placeholder={formType === 'custom' 
                ? "Beschreiben Sie Ihre Wünsche für die Personalisierung (z.B. Größe, Farbe, Muster)..."
                : "Ihre Nachricht an uns..."
              }
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1 animate-fadeIn">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting || isSuccess}
            className={`
              w-full py-3 px-6 rounded-lg
              ${isSuccess 
                ? 'bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700' 
                : 'bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600'
              }
              text-white font-medium
              transform transition-all duration-300
              hover:scale-105
              focus:outline-none focus:ring-2 focus:ring-offset-2 
              ${isSuccess ? 'focus:ring-green-500' : 'focus:ring-indigo-500'}
              flex items-center justify-center space-x-2
              ${(isSubmitting || isSuccess) ? 'opacity-75 cursor-not-allowed' : ''}
            `}
          >
            {isSubmitting ? (
              <Sparkles className="animate-spin h-5 w-5" />
            ) : isSuccess ? (
              <span className="flex items-center space-x-2 animate-fadeIn">
                <Check className="h-5 w-5" />
                <span>Nachricht gesendet!</span>
              </span>
            ) : (
              <>
                <Send className="h-5 w-5" />
                <span>Nachricht senden</span>
              </>
            )}
          </button>

          {isSuccess && (
            <div className="text-center text-green-600 dark:text-green-400 animate-fadeIn mt-4">
              Vielen Dank für Ihre Nachricht. Wir werden uns bald bei Ihnen melden.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};