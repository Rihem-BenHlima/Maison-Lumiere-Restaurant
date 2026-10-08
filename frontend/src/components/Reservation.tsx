import { useState, type FormEvent } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Check, Loader2, AlertCircle } from 'lucide-react';

type FormState = {
  name: string;
  email: string;
  phone: string;
  party_size: string;
  reservation_date: string;
  reservation_time: string;
  special_requests: string;
};

const timeSlots = [
  '17:00', '17:30', '18:00', '18:30',
  '19:00', '19:30', '20:00', '20:30',
  '21:00', '21:30',
];

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  party_size: '2',
  reservation_date: '',
  reservation_time: '19:00',
  special_requests: '',
};

export default function Reservation() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const { ref, visible } = useScrollReveal<HTMLDivElement>();

  const today = new Date().toISOString().split('T')[0];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/reservations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, party_size: parseInt(form.party_size) }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Request failed');
      }

      setStatus('success');
      setForm(initialState);

      setTimeout(() => setStatus('idle'), 6000);
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again or call us directly.'
      );
    }
  };

  return (
    <section id="reserve" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/24433378/pexels-photo-24433378.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Elegant dinner table setting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/85" />
      </div>

      <div ref={ref} className={`relative max-w-3xl mx-auto px-6 lg:px-12 reveal ${visible ? 'visible' : ''}`}>
        <div className="text-center mb-12">
          <div className="section-label justify-center mb-6">
            <span className="w-8 h-px bg-gold" />
            Reservations
            <span className="w-8 h-px bg-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white leading-[1.15] mb-4">
            Reserve Your <em className="text-gold">Table</em>
          </h2>
          <p className="font-sans text-sm text-white/50 max-w-md mx-auto">
            Secure your place at our table. We look forward to welcoming you to an
            unforgettable dining experience.
          </p>
        </div>

        {status === 'success' ? (
          <div className="bg-charcoal/60 backdrop-blur-sm border border-gold/30 p-12 text-center animate-fade-in">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-gold flex items-center justify-center">
              <Check className="w-8 h-8 text-gold" />
            </div>
            <h3 className="font-serif text-3xl text-white mb-3">Reservation Confirmed</h3>
            <p className="font-sans text-sm text-white/60 max-w-sm mx-auto">
              Thank you, {form.name || 'valued guest'}. We've received your request and
              will send a confirmation to your email shortly. We look forward to serving you.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-charcoal/50 backdrop-blur-md border border-gold/20 p-8 lg:p-12"
          >
            {status === 'error' && (
              <div className="mb-6 flex items-start gap-3 bg-red-900/30 border border-red-500/30 p-4">
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <p className="font-sans text-sm text-red-300">{errorMessage}</p>
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Name */}
              <div className="sm:col-span-2">
                <label className="block font-sans text-[11px] tracking-[0.2em] uppercase text-gold/70 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-sans text-[11px] tracking-[0.2em] uppercase text-gold/70 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="you@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block font-sans text-[11px] tracking-[0.2em] uppercase text-gold/70 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="+216 20 123 456"
                />
              </div>

              {/* Party size */}
              <div>
                <label className="block font-sans text-[11px] tracking-[0.2em] uppercase text-gold/70 mb-2">
                  Party Size
                </label>
                <select
                  name="party_size"
                  value={form.party_size}
                  onChange={handleChange}
                  className="input-field appearance-none cursor-pointer"
                >
                  {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
                    <option key={n} value={n} className="bg-charcoal text-white">
                      {n} {n === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date */}
              <div>
                <label className="block font-sans text-[11px] tracking-[0.2em] uppercase text-gold/70 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  name="reservation_date"
                  required
                  min={today}
                  value={form.reservation_date}
                  onChange={handleChange}
                  className="input-field [color-scheme:dark]"
                />
              </div>

              {/* Time */}
              <div className="sm:col-span-2">
                <label className="block font-sans text-[11px] tracking-[0.2em] uppercase text-gold/70 mb-2">
                  Preferred Time
                </label>
                <div className="flex flex-wrap gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setForm({ ...form, reservation_time: time })}
                      className={`px-4 py-2 font-sans text-xs tracking-wide transition-all duration-300 border ${
                        form.reservation_time === time
                          ? 'bg-gold text-white border-gold'
                          : 'bg-transparent text-white/50 border-white/15 hover:text-gold hover:border-gold/50'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Special requests */}
              <div className="sm:col-span-2">
                <label className="block font-sans text-[11px] tracking-[0.2em] uppercase text-gold/70 mb-2">
                  Special Requests
                </label>
                <textarea
                  name="special_requests"
                  rows={3}
                  value={form.special_requests}
                  onChange={handleChange}
                  className="input-field resize-none"
                  placeholder="Dietary restrictions, celebrations, seating preferences..."
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn-gold w-full mt-8 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Sending Request
                </>
              ) : (
                'Request Reservation'
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
