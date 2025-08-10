import { CONTACT_EMAIL } from './constants';

export interface EmailData {
  name?: string;
  email?: string;
  company?: string;
  industry?: string;
  message?: string;
}


export function createAssessmentEmail(data: EmailData): string {
  const subject = "Free AI Assessment Request";
  const body = `Hello FFIRA Team,

I would like to request a free AI assessment for my business.

Here are my details:
- Name: ${data.name}
- Email: ${data.email}
- Company: ${data.company}
${data.industry ? `- Industry: ${data.industry}` : ''}
${data.message ? `- Message: ${data.message}` : ''}

I'm interested in learning how AI can help optimize my business processes and workflows.

Looking forward to hearing from you!

Best regards,
${data.name}`;

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function createDemoEmail(data: EmailData): string {
  const subject = "DalGPT Demo Request";
  const body = `Hello FFIRA Team,

I would like to request a demo of DalGPT for my business.

Here are my details:
- Name: ${data.name}
- Email: ${data.email}
- Company: ${data.company}
${data.industry ? `- Industry: ${data.industry}` : ''}

I'm interested in learning how DalGPT can help with our document management and data analysis needs.

Looking forward to hearing from you!

Best regards,
${data.name}`;

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function openEmailClient(mailtoUrl: string): void {
  window.open(mailtoUrl, '_blank');
}