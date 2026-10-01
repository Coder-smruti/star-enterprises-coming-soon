import React, { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import {
  ArrowUpRight,
  ChevronDown,
  FileText,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  PhoneCall,
  Settings,
  User,
  Zap,
} from 'lucide-react';
import { CONTACT_INFO, CONTACT_PAGE_PHONES, ENQUIRY_SEGMENTS } from '../data/content';

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  segment: string;
  interest: string;
  message: string;
};

function buildWhatsAppText(form: FormState) {
  const segment =
    ENQUIRY_SEGMENTS.find((s) => s.id === form.segment)?.label || form.segment || 'Not specified';
  return [
    `Hello Star Enterprises — new solar enquiry`,
    ``,
    `Name: ${form.fullName}`,
    `Phone: ${form.phone}`,
    `Email: ${form.email}`,
    `Location: ${form.location}`,
    `Property type: ${segment}`,
    form.interest ? `Product interest: ${form.interest}` : null,
    ``,
    `Message:`,
    form.message || 'Please advise on the right solar solution for my site.',
  ]
    .filter((line) => line !== null)
    .join('\n');
}

export const ContactPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const prefilledType = searchParams.get('type') || '';
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [formState, setFormState] = useState<FormState>({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    segment: '',
    interest: prefilledType,
    message: '',
  });

  useEffect(() => {
    const nextType = searchParams.get('type') || '';
    setFormState((prev) => ({
      ...prev,
      interest: nextType || prev.interest,
    }));
  }, [searchParams]);

  const update = (key: keyof FormState, value: string) => {
    setFormState((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  };

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!formState.fullName.trim()) next.fullName = 'Please enter your name.';
    if (!formState.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      next.email = 'Enter a valid email address.';
    }
    if (!formState.phone.trim() || formState.phone.replace(/\D/g, '').length < 10) {
      next.phone = 'Enter a valid 10-digit phone number.';
    }
    if (!formState.location.trim()) next.location = 'Tell us your city or site location.';
    if (!formState.segment) next.segment = 'Select a property type.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const text = buildWhatsAppText(formState);
    sessionStorage.setItem(
      'star-enquiry',
      JSON.stringify({
        ...formState,
        submittedAt: new Date().toISOString(),
      }),
    );

    const waUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');

    window.setTimeout(() => {
      navigate('/thank-you');
    }, 350);
  };

  const enquiryBanner = useMemo(() => {
    if (!prefilledType) return null;
    return prefilledType;
  }, [prefilledType]);

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-shell">
          <div className="contact-hero-media" aria-hidden>
            <img src="/media/contact-hero.jpg" alt="" />
            <div className="contact-hero-veil" />
          </div>

          <div className="site-container contact-hero-layout">
            <div className="contact-hero-copy">
              <p className="contact-hero-eyebrow">
                <span className="contact-hero-rule" />
                Contact Us
              </p>
              <h1 className="display contact-hero-title">
                READY WHEN
                <br />
                <span className="is-accent">YOU ARE.</span>
              </h1>
              <p className="contact-hero-lead">
                Tell us about your home, business or industrial site — we will help you identify the
                right solar solution, brands and next step.
              </p>

              <ul className="contact-hero-features">
                <li>
                  <span className="contact-hero-feature-icon">
                    <MessageCircle />
                  </span>
                  <span>
                    <strong>Expert Guidance</strong>
                  </span>
                </li>
                <li>
                  <span className="contact-hero-feature-icon">
                    <Settings />
                  </span>
                  <span>
                    <strong>Customized Solutions</strong>
                  </span>
                </li>
                <li>
                  <span className="contact-hero-feature-icon">
                    <Zap />
                  </span>
                  <span>
                    <strong>Quick Response</strong>
                </span>
                </li>
              </ul>

              <div className="contact-hero-actions">
                <a href={`tel:${CONTACT_PAGE_PHONES[0].tel}`} className="btn btn-accent">
                  <PhoneCall />
                  Call {CONTACT_PAGE_PHONES[0].display}
                  <ArrowUpRight />
                </a>
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-navy"
                >
                  <MessageCircle />
                  WhatsApp Us
                  <ArrowUpRight />
                </a>
            </div>

              <div className="contact-hero-phones">
                {CONTACT_PAGE_PHONES.map((phone) => (
                  <a key={phone.tel} href={`tel:${phone.tel}`}>
                    {phone.display}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-body">
        <div className="site-container contact-layout">
          <aside className="contact-aside">
            <div className="contact-visual-card">
              <img src="/media/commercial.jpg" alt="" className="contact-visual-img" />
              <div className="contact-visual-veil" />
              <div className="contact-visual-content">
                <p className="contact-visual-kicker">Star Enterprises</p>
                <h3 className="display contact-visual-title">
                  Let&apos;s build your
                  <br />
                  <span>solar future.</span>
                </h3>
                <p className="contact-visual-copy">
                  Reach us by call, WhatsApp or email — we typically respond within one business day.
                </p>

                <div className="contact-visual-links">
                  <div className="contact-visual-phones">
                    <span className="contact-visual-phones-label">
                      <Phone />
                      <strong>Call</strong>
                    </span>
                    {CONTACT_PAGE_PHONES.map((phone) => (
                      <a key={phone.tel} href={`tel:${phone.tel}`} className="contact-visual-phone">
                        {phone.display}
                      </a>
                    ))}
                  </div>
                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-visual-link"
                  >
                    <MessageCircle />
                    <span>
                      <strong>WhatsApp</strong>
                      <em>Chat with our team</em>
                    </span>
                  </a>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="contact-visual-link">
                    <Mail />
                    <span>
                      <strong>Email</strong>
                      <em>{CONTACT_INFO.email}</em>
                    </span>
                  </a>
                  <a
                    href={CONTACT_INFO.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-visual-link"
                  >
                    <MapPin />
                    <span>
                      <strong>Visit</strong>
                      <em>{CONTACT_INFO.addressLines.join(', ')}</em>
                    </span>
                  </a>
                </div>
              </div>
                  </div>
          </aside>

          <div className="contact-form-wrap">
            <form onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="contact-form-head">
                  <div>
                  <p className="contact-form-kicker">Enquiry</p>
                  <h2 className="display contact-form-title">
                    Tell us a little <span className="is-accent">more.</span>
                  </h2>
                  <p className="contact-form-lead">
                    Fill this in and we will reach out on WhatsApp or call to discuss the right solar
                    solution for your site.
                  </p>
                </div>
                {enquiryBanner && (
                  <div className="contact-prefill" role="status">
                    <span className="contact-form-kicker mb-0">Enquiring about</span>
                    <strong>{enquiryBanner}</strong>
                    <Link to="/products" className="contact-prefill-change">
                      Change product
                    </Link>
                  </div>
                )}
            </div>

              <div className="contact-fields">
                <label className="block sm:col-span-2">
                  <span className="field-label">Property type *</span>
                  <span className={`field-shell field-shell-select mt-2 ${errors.segment ? 'is-invalid' : ''}`}>
                    <select
                      name="segment"
                      value={formState.segment}
                      onChange={(e) => update('segment', e.target.value)}
                    >
                      <option value="" disabled>
                        Select property type
                      </option>
                      {ENQUIRY_SEGMENTS.map((seg) => (
                        <option key={seg.id} value={seg.id}>
                          {seg.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown />
                  </span>
                  {errors.segment && <p className="field-error">{errors.segment}</p>}
                          </label>

                <label className="block">
                  <span className="field-label">Full name *</span>
                  <span className={`field-shell mt-2 ${errors.fullName ? 'is-invalid' : ''}`}>
                    <User />
                          <input
                      name="fullName"
                      autoComplete="name"
                      placeholder="Your full name"
                            value={formState.fullName}
                      onChange={(e) => update('fullName', e.target.value)}
                    />
                  </span>
                  {errors.fullName && <p className="field-error">{errors.fullName}</p>}
                          </label>

                <label className="block">
                  <span className="field-label">Email *</span>
                  <span className={`field-shell mt-2 ${errors.email ? 'is-invalid' : ''}`}>
                    <Mail />
                          <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      value={formState.email}
                      onChange={(e) => update('email', e.target.value)}
                    />
                  </span>
                  {errors.email && <p className="field-error">{errors.email}</p>}
                          </label>

                <label className="block">
                  <span className="field-label">Phone *</span>
                  <span className={`field-shell mt-2 ${errors.phone ? 'is-invalid' : ''}`}>
                    <Phone />
                          <input
                            type="tel"
                      name="phone"
                      autoComplete="tel"
                      placeholder="+91 9XXXX XXXXX"
                            value={formState.phone}
                      onChange={(e) => update('phone', e.target.value)}
                    />
                  </span>
                  {errors.phone && <p className="field-error">{errors.phone}</p>}
                          </label>

                <label className="block">
                  <span className="field-label">Location / city *</span>
                  <span className={`field-shell mt-2 ${errors.location ? 'is-invalid' : ''}`}>
                    <MapPin />
                          <input
                      name="location"
                      autoComplete="address-level2"
                      placeholder="City or site area"
                      value={formState.location}
                      onChange={(e) => update('location', e.target.value)}
                    />
                  </span>
                  {errors.location && <p className="field-error">{errors.location}</p>}
                          </label>

                <label className="block sm:col-span-2">
                  <span className="field-label">Additional details</span>
                  <span className="field-shell field-shell-area mt-2">
                    <FileText />
                        <textarea
                      name="message"
                      rows={4}
                      placeholder="Roof type, monthly bill, load, subsidy interest, preferred timeline…"
                          value={formState.message}
                      onChange={(e) => update('message', e.target.value)}
                        />
                  </span>
                </label>
                      </div>

              <div className="contact-form-actions">
                <button type="submit" className="btn btn-accent" disabled={isSubmitting}>
                  {isSubmitting ? 'Opening WhatsApp…' : 'Send via WhatsApp'}
                  <ArrowUpRight />
                        </button>
              </div>
              <p className="contact-form-note">
                By sending, you agree we may contact you about this solar enquiry. No spam — only a
                practical follow-up.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
