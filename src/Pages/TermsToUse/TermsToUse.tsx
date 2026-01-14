"use client";

export default function TermsToUse() {
  return (
    <div className="min-h-screen bg-white px-4 py-6 md:px-10">

      {/* Page Header */}
      <div className="mb-8 border-b border-gray-200 pb-4">
        <h1 className="text-2xl md:text-3xl font-semibold text-primary">
          Terms To Use
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Last updated: Jan 2026
        </p>
      </div>

      <div className="max-w-4xl space-y-8 text-gray-700">

        <Section
          title="1. Acceptance of Terms"
          content="By accessing or using FoodWagon, you agree to be bound by these Terms To Use. If you do not agree, please discontinue using the platform."
        />

        <Section
          title="2. User Accounts"
          content="You are responsible for maintaining the confidentiality of your account and all activities that occur under your account."
        />

        <Section>
          <h2 className="section-title">3. Orders & Payments</h2>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>All prices are displayed in INR.</li>
            <li>Orders must be prepaid before confirmation.</li>
            <li>FoodWagon is not responsible for restaurant delays.</li>
          </ul>
        </Section>

        <Section
          title="4. Cancellations & Refunds"
          content="Once an order is confirmed, cancellation may not be possible. Refunds are processed according to restaurant policies."
        />

        <Section>
          <h2 className="section-title">5. Prohibited Activities</h2>
          <ul className="list-disc pl-5 text-sm space-y-1">
            <li>Misuse of the platform</li>
            <li>Fraudulent or fake orders</li>
            <li>Harassment of delivery partners or restaurants</li>
          </ul>
        </Section>

        <Section
          title="6. Limitation of Liability"
          content="FoodWagon shall not be liable for indirect or incidental damages arising from the use of our services."
        />

        <Section
          title="7. Changes to Terms"
          content="We reserve the right to update these terms at any time. Continued usage implies acceptance of the revised terms."
        />

        <Section>
          <h2 className="section-title">8. Contact Information</h2>
          <p className="text-sm">
            For any questions, contact us at{" "}
            <span className="text-primary font-medium">
              support@foodwagon.in
            </span>
          </p>
        </Section>

      </div>
    </div>
  );
}

/* Reusable Section */
const Section = ({
  title,
  content,
  children,
}: {
  title?: string;
  content?: string;
  children?: React.ReactNode;
}) => (
  <section className="space-y-2">
    {title && <h2 className="section-title">{title}</h2>}
    {content && <p className="text-sm leading-relaxed">{content}</p>}
    {children}
  </section>
);
