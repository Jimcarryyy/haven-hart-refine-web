interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}

const SectionHeading = ({ eyebrow, title, description, className = '' }: SectionHeadingProps) => {
  return (
    <div className={`text-center mb-16 ${className}`}>
      {eyebrow && (
        <p className="text-blue-gray-400 font-medium uppercase tracking-widest text-sm mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal mb-6">
        {title}
      </h2>
      {description && (
        <p className="text-xl text-slate max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
