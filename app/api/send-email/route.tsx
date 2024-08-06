import WelcomeEmail from '@/emails/WelcomeEmail';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST() {
  resend.emails.send({
    from: 'heyy@trulydami.me',
    to: ['heyydamilola@gmail.com', 'blessingphilips57@gmail.com'],
    subject: 'Hello🥲',
    react: <WelcomeEmail name="Dami" />,
  });
  return NextResponse.json({});
}
