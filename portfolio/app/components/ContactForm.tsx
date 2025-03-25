import { useActionState } from 'react';
import emailjs from '@emailjs/browser';

const sendEmail = async (
  templateParams: Record<string, unknown> | undefined
) => {
  try {
    const response = await emailjs.send(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      templateParams,
      { publicKey: import.meta.env.VITE_API_KEY }
    );
    console.log('SUCCESS!', response.status, response.text);
    return { success: true };
  } catch (error) {
    console.log('FAILED...', error);
    return { success: false, error: 'Error... Try again' };
  }
};

const submitForm = async (
  prevState: any,
  formData: { get: (arg0: string) => any }
) => {
  const templateParams = {
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  };
  console.log('templateParams=', templateParams);
  const response = await sendEmail(templateParams);
  return response;
};

export function ContactForm() {
  const [state, handleSubmit, isPending] = useActionState(submitForm, null);

  return (
    <div className="w-sm bg-white shadow-[0_0px_5px_gray] rounded-lg p-6">
      {state?.success && (
        <div className="mb-4 text-center text-green-600 font-medium">
          Thank you for your message!
        </div>
      )}
      {state?.error && (
        <div className="mb-4 text-center text-red-600 font-medium">
          {state.error}
        </div>
      )}
      <form action={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Name*</label>
          <input
            className="w-full border border-gray-300 rounded-lg p-2"
            type="text"
            name="name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            className="w-full border border-gray-300 rounded-lg p-2"
            type="email"
            name="email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">
            Message
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-2 mb-1"
            rows={5}
            name="message"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full cursor-pointer bg-blue-500 text-white font-medium py-2 rounded-lg hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
