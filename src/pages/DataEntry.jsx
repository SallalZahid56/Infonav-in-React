// src/pages/DataEntryFull.jsx
import React from "react";
import {
  CheckCircle,
  Database,
  ClipboardList,
  Layers,
  FileSpreadsheet,
  ShieldCheck,
  Filter,
  ListChecks,
  UploadCloud,
  ArrowLeftRight,
  GitMerge,
  Building2,
  BriefcaseBusiness,
  GraduationCap,
  HeartPulse,
  Banknote,
  Cpu,
  Truck,
  Users, Clock,
} from "lucide-react";

// Use your actual asset; reuse across sections
import heroImg from "../assets/internet.jpg";

const iconSize = "w-8 h-8";

const Card = ({ icon: Icon, title, children }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition">
    <div className="flex items-center gap-3 mb-3">
      {Icon && <Icon className={`${iconSize} text-brandOrange`} />}
      {title && <h4 className="font-semibold">{title}</h4>}
    </div>
    {children && <div className="text-gray-700">{children}</div>}
  </div>
);

const SectionShell = ({ id, title, tags, left, right }) => (
  <section id={id} className="container mx-auto px-6 py-16">
    <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-3">{title}</h2>
    {tags && (
      <p className="text-sm text-gray-500 text-center mb-10">
        {tags}
      </p>
    )}
    <div className="grid lg:grid-cols-2 gap-10 items-start">
      {/* Left: paragraphs + cards */}
      <div>{left}</div>

      {/* Right: image */}
      <div className="lg:pl-6">
        <img src={heroImg} alt={title} className="w-full rounded-2xl shadow-md" />
      </div>
    </div>
  </section>
);

const DataEntryPage = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* HERO */}
      <section className="relative overflow-hidden p-6 md:p-10 lg:p-12">
        <div className="absolute inset-0 bg-gradient-to-br from-brandOrange/10 via-orange-200/20 to-white pointer-events-none" />
        <div className="container mx-auto px-6 py-12 md:py-16 relative">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left */}
            <div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
                Professional Data Entry Services for Businesses
              </h1>
              <p className="mt-5 text-lg text-gray-700">
                At Info Navigators, we provide professional data entry services tailored to the needs of businesses
                that demand accuracy, speed, and security. Whether you’re a small business owner, a growing startup,
                or an established enterprise, your operations depend on accurate, organized, and up-to-date information.
                We help you achieve that by delivering reliable data entry solutions that free up your time and resources
                while maintaining high-quality business records.
              </p>
              <p className="mt-4 text-gray-700">
                Our data entry company is trusted by clients worldwide because we don’t just type data into spreadsheets
                or databases — we ensure that every entry is verified, formatted, and organized for your specific workflows.
                This means you can access, analyze, and act on your business data without worrying about missing details,
                duplicates, or inconsistencies.
              </p>
              <button className="mt-8 bg-brandOrange text-white px-6 py-3 rounded-xl shadow hover:bg-black transition font-heading">
                Get Started
              </button>
            </div>

            {/* Right */}
            <div className="relative">
              <img src={heroImg} alt="Professional Data Entry Services" className="w-full rounded-2xl shadow-xl ring-1 ring-black/5" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Businesses Outsource Data Entry to Us */}
      <SectionShell
        id="why-outsource"
        title="Why Businesses Outsource Data Entry to Us"
        left={
          <>
            <p className="mb-6">
              Managing large amounts of data internally can be time-consuming and expensive. By outsourcing your data entry services
              to Info Navigators, you gain:
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <Card icon={CheckCircle}>
                Cost efficiency – Avoid hiring, training, and managing in-house staff.
              </Card>
              <Card icon={CheckCircle}>
                Faster turnaround times – Meet tight deadlines without sacrificing quality.
              </Card>
              <Card icon={CheckCircle}>
                Expertise in multiple tools – From Excel data entry to database entry in CRMs like Salesforce, HubSpot, and Zoho.
              </Card>
              <Card icon={CheckCircle}>
                Scalability – Handle both one-time projects and ongoing needs.
              </Card>
            </div>

            <p className="mt-6">
              We’ve worked with industries including e-commerce, real estate, marketing agencies, healthcare, finance, and more. Whether you
              need data entry specialists for customer records, invoices, survey results, or lead lists, we customize our services to fit
              your requirements.
            </p>
            <p className="mt-4">
              When you partner with us, you’re not just getting a data entry virtual assistant — you’re getting a strategic business partner
              committed to helping you keep your operations efficient, data-driven, and growth-focused.
            </p>
          </>
        }
        right
      />

      {/* Why Accurate Data Entry Matters for Business Growth */}
      <SectionShell
        id="why-accurate"
        title="Why Accurate Data Entry Matters for Business Growth"
        tags="(link internally to your Lead Generation page) • Tags: accurate data entry, data entry for business growth, data management services, database accuracy, business data entry"
        left={
          <>
            <p className="mb-4">
              Data is the backbone of modern business. Every sales record, customer detail, marketing lead, and financial transaction you
              collect plays a role in shaping your strategy and driving results. But when that data is inaccurate, incomplete, or outdated,
              it can cost your company time, money, and missed opportunities.
            </p>

            <h4 className="font-heading font-semibold mt-4 mb-3">The Business Impact of Accurate Data</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              <Card icon={CheckCircle}>Better decision-making – Your analytics and reports are only as good as the data they’re based on.</Card>
              <Card icon={CheckCircle}>Improved customer targeting – Clean, accurate databases allow precise segmentation for email marketing and B2B lead generation campaigns.</Card>
              <Card icon={CheckCircle}>Operational efficiency – Staff spend less time searching for information or correcting mistakes.</Card>
              <Card icon={CheckCircle}>Increased ROI on marketing – Accurate targeting reduces wasted ad spend and increases conversions.</Card>
            </div>

            <h4 className="font-heading font-semibold mt-6 mb-3">Data Entry and Lead Generation Go Hand-in-Hand</h4>
            <p>
              When paired with lead generation services, accurate data becomes a powerful growth engine. Imagine having a CRM full of verified,
              targeted leads—your sales team can spend their time building relationships instead of fixing spreadsheets. That’s why Info Navigators
              integrates data management services into our B2B and B2C marketing solutions.
            </p>
            <p className="mt-3">
              Accurate business data entry also plays a critical role in compliance. With data protection regulations like GDPR and CCPA, ensuring
              your records are correct and permission-based isn’t optional—it’s essential.
            </p>
          </>
        }
        right
      />

      {/* Our Core Data Entry Solutions */}
      <SectionShell
        id="core-solutions"
        title="Our Core Data Entry Solutions"
        tags="Tags: core data entry solutions, data entry outsourcing, database entry services, spreadsheet data entry, CRM data entry"
        left={
          <>
            <p className="mb-6">
              At Info Navigators, our core data entry solutions are designed to meet the diverse needs of modern businesses. Whether you need
              one-time database entry services for a product launch or ongoing CRM data entry for customer management, we deliver solutions that
              are accurate, scalable, and secure.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <Card icon={Database} title="CRM Data Entry">
                (link to CRM Data Entry subpage) Your CRM is only as valuable as the data it contains. We ensure CRM data entry is consistent,
                accurate, and up-to-date so your sales and marketing teams can operate with confidence. This includes adding new leads, updating
                contact information, logging activities, and segmenting your audience for targeted campaigns.
              </Card>
              <Card icon={Filter} title="Data Cleaning & Formatting">
                (link to Data Cleaning subpage) Messy data can hurt your business performance. We specialize in data cleaning and formatting—removing
                duplicates, fixing errors, and standardizing data to make it useful for analysis, reporting, and automation.
              </Card>
              <Card icon={Layers} title="Database Management">
                We manage large-scale database entry projects, from inventory catalogs to customer profiles. Our team uses advanced tools to ensure
                accuracy, security, and easy integration with your business systems.
              </Card>
              <Card icon={FileSpreadsheet} title="Spreadsheet Data Entry">
                Whether you need Excel data entry or Google Sheets updates, we organize your raw information into clear, well-structured spreadsheets
                that are easy to read, analyze, and share across your organization.
              </Card>
            </div>
          </>
        }
        right
      />

      {/* CRM Data Entry (Deep Section) */}
      <SectionShell
        id="crm-data-entry"
        title="CRM Data Entry"
        tags="(Internal link to CRM Data Entry subpage) • Tags: CRM data entry, CRM data management, CRM database entry, CRM lead entry, CRM data cleaning"
        left={
          <>
            <p className="mb-4">
              Your CRM (Customer Relationship Management) system is the beating heart of your sales and marketing operations. But without accurate,
              organized, and up-to-date information, even the most advanced CRM is just a digital address book. At Info Navigators, our CRM data
              entry services ensure your system becomes a powerful sales engine, helping your team focus on closing deals instead of wrestling with messy data.
            </p>

            <h4 className="font-heading font-semibold mt-2 mb-3">Why CRM Data Entry Is Critical</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              <Card icon={CheckCircle}>✅ Provide sales reps with real-time, accurate information on every lead and customer.</Card>
              <Card icon={CheckCircle}>✅ Reduce duplication and eliminate outdated records.</Card>
              <Card icon={CheckCircle}>✅ Improve segmentation for B2B lead generation and email marketing campaigns.</Card>
              <Card icon={CheckCircle}>✅ Boost efficiency by ensuring data is formatted and tagged correctly for automation workflows.</Card>
            </div>

            <h4 className="font-heading font-semibold mt-6 mb-3">What We Offer in CRM Data Entry</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              <Card icon={ClipboardList}>Lead Entry &amp; Updating – Adding new leads from forms, campaigns, and purchased lists while ensuring all details are accurate and complete.</Card>
              <Card icon={Building2}>Contact Enrichment – Filling in missing information like job titles, industries, and phone numbers using trusted data sources.</Card>
              <Card icon={ListChecks}>Activity Logging – Recording calls, emails, and meeting notes so your sales team has full visibility into customer interactions.</Card>
              <Card icon={Layers}>Segmentation &amp; Tagging – Organizing leads into specific lists for targeted outreach.</Card>
              <Card icon={ShieldCheck}>Data Validation &amp; Cleaning – Removing duplicates, fixing typos, and standardizing formats.</Card>
            </div>

            <h4 className="font-heading font-semibold mt-6 mb-3">Platforms We Support</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["HubSpot CRM", "Salesforce", "Zoho CRM", "Pipedrive", "Freshsales", "Monday.com CRM"].map((p) => (
                <Card key={p} icon={Database}>{p}</Card>
              ))}
            </div>

            <p className="mt-6">
              By integrating CRM data cleaning into our service, we make sure your team works with verified, up-to-date information—leading to more conversions
              and fewer wasted resources.
            </p>
          </>
        }
        right
      />

      {/* Data Cleaning & Formatting */}
      <SectionShell
        id="data-cleaning"
        title="Data Cleaning & Formatting"
        tags="(Internal link to Data Cleaning subpage) • Tags: data cleaning services, data formatting services, data cleansing, data standardization, data accuracy"
        left={
          <>
            <p className="mb-4">
              No matter how much data you collect, it’s only valuable if it’s clean, organized, and ready to use. At Info Navigators, our data cleaning &amp; formatting services
              transform messy, incomplete, or inconsistent datasets into high-quality business assets that power accurate decision-making.
            </p>

            <h4 className="font-heading font-semibold mt-2 mb-3">Why Data Cleaning Matters</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              <Card icon={BriefcaseBusiness}>Missed sales opportunities from contacting the wrong person.</Card>
              <Card icon={ClipboardList}>Inaccurate reports leading to poor decision-making.</Card>
              <Card icon={ShieldCheck}>Compliance issues with data privacy regulations.</Card>
              <Card icon={Banknote}>Wasted marketing spend targeting invalid or irrelevant contacts.</Card>
            </div>

            <h4 className="font-heading font-semibold mt-6 mb-3">Our data cleansing process ensures your information is:</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              <Card icon={ShieldCheck}>Accurate – Verified against trusted sources.</Card>
              <Card icon={ListChecks}>Complete – Missing fields are filled where possible.</Card>
              <Card icon={Filter}>Consistent – Formatting is standardized across your database.</Card>
              <Card icon={CheckCircle}>De-duplicated – Only one record exists per unique contact.</Card>
            </div>

            <h4 className="font-heading font-semibold mt-6 mb-3">Our Data Cleaning &amp; Formatting Process</h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card icon={ClipboardList}>Data Audit – Identify inconsistencies, duplicates, and incomplete records.</Card>
              <Card icon={ListChecks}>Data Correction – Fix typos, formatting issues, and incorrect entries.</Card>
              <Card icon={Filter}>Data Standardization – Apply consistent formats for names, addresses, phone numbers, and dates.</Card>
              <Card icon={ShieldCheck}>Validation &amp; Verification – Check against external databases to ensure accuracy.</Card>
              <Card icon={UploadCloud}>Final Formatting – Deliver your clean data in Excel, CSV, or direct CRM upload.</Card>
            </div>

            <h4 className="font-heading font-semibold mt-6 mb-3">Types of Data We Clean</h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card icon={Users}>Customer &amp; Lead Databases (perfect for lead generation campaigns)</Card>
              <Card icon={FileSpreadsheet}>E-commerce Product Data</Card>
              <Card icon={Banknote}>Financial &amp; Transaction Records</Card>
              <Card icon={ClipboardList}>Survey &amp; Research Data</Card>
              <Card icon={HeartPulse}>Medical &amp; Healthcare Records</Card>
            </div>

            <p className="mt-6">
              With data standardization built into every project, we ensure your team spends less time fixing data and more time using it to drive results.
            </p>
          </>
        }
        right
      />

      {/* Database Management */}
      <SectionShell
        id="database-management"
        title="Database Management"
        tags="Tags: database management services, database entry services, business database management, data organization, database accuracy"
        left={
          <>
            <p className="mb-4">
              Managing a business database requires more than just inputting numbers—it’s about organization, accessibility, and accuracy. At Info Navigators, we provide database
              management services that ensure your information is structured for maximum usability and business performance.
            </p>

            <h4 className="font-heading font-semibold mt-2 mb-3">Why Businesses Need Professional Database Management</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              <Card icon={Clock}>Slow access to critical information.</Card>
              <Card icon={ShieldCheck}>High error rates from unverified data.</Card>
              <Card icon={Layers}>Inefficient workflows that waste staff time.</Card>
            </div>

            <h4 className="font-heading font-semibold mt-6 mb-3">We help you avoid these pitfalls by providing:</h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card icon={Database}>Database Entry Services – Adding new data from multiple sources.</Card>
              <Card icon={Layers}>Database Structuring – Designing logical, easy-to-use layouts.</Card>
              <Card icon={ShieldCheck}>Data Verification – Ensuring each entry is correct and up-to-date.</Card>
              <Card icon={ShieldCheck}>Access Control &amp; Security – Protecting sensitive data from unauthorized access.</Card>
              <Card icon={ClipboardList}>Ongoing Maintenance – Regular updates to prevent data decay.</Card>
            </div>

            <p className="mt-6">
              Our business database management approach is perfect for CRM systems, e-commerce catalogs, inventory lists, and large-scale customer datasets.
            </p>
          </>
        }
        right
      />

      {/* Spreadsheet Data Entry */}
      <SectionShell
        id="spreadsheet-data-entry"
        title="Spreadsheet Data Entry"
        tags="Tags: spreadsheet data entry, Excel data entry services, Google Sheets data entry, spreadsheet formatting, data entry in spreadsheets"
        left={
          <>
            <p className="mb-4">
              Spreadsheets are one of the most flexible tools for organizing business data—but only if they’re set up correctly. Our spreadsheet data entry services make sure your
              Excel or Google Sheets files are accurate, well-structured, and easy to work with.
            </p>

            <h4 className="font-heading font-semibold mt-2 mb-3">What We Offer</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              <Card icon={CheckCircle}>Manual Data Entry – Carefully inputting information without automation errors.</Card>
              <Card icon={UploadCloud}>Bulk Data Import – Converting large datasets into clean, organized spreadsheets.</Card>
              <Card icon={FileSpreadsheet}>Spreadsheet Formatting – Applying consistent styles, headings, and data validation.</Card>
              <Card icon={ListChecks}>Formulas &amp; Functions Setup – For automatic calculations and summaries.</Card>
              <Card icon={Filter}>Data Sorting &amp; Filtering – Making your spreadsheets user-friendly.</Card>
            </div>

            <p className="mt-6">
              Whether you need Excel data entry services for financial reports, Google Sheets data entry for collaborative projects, or specialized spreadsheet formatting for
              analysis, Info Navigators delivers results with precision.
            </p>
          </>
        }
        right
      />

      {/* Data Formatting Solutions */}
      <SectionShell
        id="data-formatting-solutions"
        title="Data Formatting Solutions"
        tags="Tags: data formatting services, spreadsheet formatting, CSV to CRM formatting, multi-source data integration, data migration formatting"
        left={
          <>
            <p className="mb-4">
              Data is only as valuable as it is usable. Even the most detailed dataset loses its power if it’s stored in inconsistent formats, spread across multiple sources, or
              incompatible with your systems. At Info Navigators, our data formatting solutions ensure your information is structured, standardized, and ready to power your business
              operations—from CRM automation to sales outreach.
            </p>

            <h4 className="font-heading font-semibold mt-2 mb-3">Spreadsheet Formatting</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              <Card icon={Filter}>✅ Filter and sort data instantly.</Card>
              <Card icon={ShieldCheck}>✅ Avoid input errors with data validation rules.</Card>
              <Card icon={ListChecks}>✅ Use formulas and pivot tables for quick analysis.</Card>
              <Card icon={UploadCloud}>✅ Share and collaborate without formatting breaking.</Card>
            </div>
            <p className="mt-4">
              We handle everything from Excel formatting for financial reports to Google Sheets formatting for marketing analytics, ensuring your data is always presentation-ready and actionable.
            </p>

            <h4 className="font-heading font-semibold mt-6 mb-3">CSV/Excel to CRM Formatting</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              <Card icon={ListChecks}>Mapping custom fields for leads, deals, and accounts.</Card>
              <Card icon={ArrowLeftRight}>Splitting combined columns (e.g., separating first and last names).</Card>
              <Card icon={Filter}>Standardizing date formats, phone numbers, and email addresses.</Card>
              <Card icon={ShieldCheck}>Removing duplicate entries before import.</Card>
            </div>
            <p className="mt-4">
              This ensures your CRM starts with clean, consistent, and conversion-ready data—critical for B2B lead generation and email marketing campaigns.
            </p>

            <h4 className="font-heading font-semibold mt-6 mb-3">Multi-source Data Integration</h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card icon={GitMerge}>Gain a 360° view of your customers.</Card>
              <Card icon={ClipboardList}>Run more accurate analytics.</Card>
              <Card icon={Layers}>Remove redundancies that lead to wasted outreach efforts.</Card>
            </div>
            <p className="mt-4">
              Our multi-source data integration expertise means we can pull from Excel, Google Sheets, CRM exports, ERP systems, and marketing tools like Mailchimp or Apollo.io, and merge
              them into one master dataset—fully cleaned and formatted.
            </p>
          </>
        }
        right
      />

      {/* Industries That Benefit from Clean Data */}
      <SectionShell
        id="industries"
        title="Industries That Benefit from Clean Data"
        tags="Tags: industries using data cleaning, data cleaning for business, CRM data cleaning for industries, data accuracy in industries"
        left={
          <>
            <p className="mb-6">
              Clean, well-structured data is not just a “nice-to-have”—it’s a profit multiplier across industries. We’ve provided data cleaning and formatting services to hundreds of
              clients in diverse sectors, helping them boost efficiency, reduce costs, and improve marketing ROI.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <Card icon={BriefcaseBusiness} title="E-commerce">
                For online stores, product listings, customer profiles, and order records must be accurate. Clean product data improves search rankings, while customer data cleaning ensures you
                target the right audience in your email campaigns.
              </Card>
              <Card icon={Building2} title="Real Estate">
                Accurate property listings, client databases, and lead segmentation are critical for closing deals. Data cleaning helps agents avoid duplicate contacts and maintain correct property details.
              </Card>
              <Card icon={HeartPulse} title="Healthcare">
                In healthcare, accuracy is non-negotiable. Clean patient and insurance data ensures compliance, improves service delivery, and supports accurate reporting for regulatory purposes.
              </Card>
              <Card icon={Banknote} title="Finance & Banking">
                Financial institutions rely on accurate datasets for compliance, fraud detection, and targeted product offerings. Our services reduce risk and improve targeting for financial lead generation.
              </Card>
              <Card icon={Cpu} title="SaaS & Technology">
                Software companies need clean CRM databases to power automated marketing, sales forecasting, and B2B SaaS lead generation.
              </Card>
              <Card icon={Truck} title="Logistics & Transportation">
                From tracking shipments to managing fleet data, accuracy ensures operational efficiency and reduces costly errors.
              </Card>
            </div>
          </>
        }
        right
      />

      {/* Our Proven Data Cleaning Process */}
      <SectionShell
        id="cleaning-process"
        title="Our Proven Data Cleaning Process"
        tags="Tags: data cleaning process, data cleaning steps, data validation process, data standardization workflow"
        left={
          <>
            <p className="mb-6">
              At Info Navigators, our data cleaning process has been refined over 15+ years of working with businesses worldwide. It’s a proven, repeatable system that transforms raw, messy
              datasets into high-value, ready-to-use business intelligence.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card icon={ClipboardList}>Data Audit &amp; Analysis – We identify missing fields, duplicates, and inconsistencies.</Card>
              <Card icon={Filter}>Data Standardization – Consistent formats for names, addresses, phone numbers, and dates.</Card>
              <Card icon={ShieldCheck}>Data Validation – Checking against trusted sources to ensure accuracy.</Card>
              <Card icon={Building2}>Data Enrichment – Adding missing information like job titles or company names.</Card>
              <Card icon={CheckCircle}>Duplicate Removal – Ensuring only one record exists per contact.</Card>
              <Card icon={UploadCloud}>Final Formatting &amp; Delivery – Cleaned data is delivered in your preferred format (Excel, CSV, CRM-ready).</Card>
            </div>

            <p className="mt-6">
              This process ensures your data is reliable, complete, and actionable—perfect for powering lead generation, marketing automation, and reporting.
            </p>
          </>
        }
        right
      />

      {/* Tools & Technologies */}
      <SectionShell
        id="tools"
        title="Tools & Technologies We Use for Data Cleaning"
        tags="Tags: data cleaning tools, data formatting software, data enrichment tools, CRM cleaning software"
        left={
          <>
            <p className="mb-6">
              We combine manual accuracy with advanced technology to achieve exceptional results in our data cleaning services. Our toolkit includes:
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card icon={FileSpreadsheet}>Excel &amp; Google Sheets – For structured formatting and data manipulation.</Card>
              <Card icon={Filter}>OpenRefine – For batch cleaning and transformation of large datasets.</Card>
              <Card icon={ShieldCheck}>Apollo.io &amp; Hunter.io – For email validation and contact enrichment.</Card>
              <Card icon={GraduationCap}>LinkedIn Sales Navigator – For updating and verifying B2B contact information.</Card>
              <Card icon={Database}>CRM Native Tools (HubSpot, Salesforce, Zoho) – For direct data cleanup inside CRM systems.</Card>
              <Card icon={Layers}>Custom Scripts &amp; Automation – For multi-source integration and bulk cleaning.</Card>
            </div>

            <p className="mt-6">
              This combination of human expertise and technology automation ensures you get high-quality, error-free data every time.
            </p>
          </>
        }
        right
      />
    </div>
  );
};

export default DataEntryPage;
