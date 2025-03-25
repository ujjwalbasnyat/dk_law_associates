
// Define the props interface
interface CardProps {
  header: string;
  content: string;
}

// Define the icon map type

const Card = ({ header, content }: CardProps) => {

  return (
    <div 
      className="max-w-sm rounded-lg overflow-hidden shadow-lg p-6 bg-white border-t-4"
      style={{ borderTopColor: '#C9A227' }}
    >
      <div className="flex items-center mb-4">
        <h2 
          className="font-bold text-xl text-foreground"
        >
          {header}
        </h2>
      </div>
      <p className="text-base text-text">
        {content}
      </p>
    </div>
  );
};

export default Card;