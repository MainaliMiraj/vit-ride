import Link from "next/link";

interface ServiceCardInterface {
  title: string;
  description: string;
  icon: string;
  btnName:string
}

const ServiceCard = ({ title, description, icon,btnName }: ServiceCardInterface) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-2">{icon}</span>
        <h2 className="text-xl font-semibold text-orange-500">{title}</h2>
      </div>
      <p className="text-gray-600">{description}</p>
      <Link href="/booking">
        <div className="block mt-6 bg-slate-200 text-black px-4 py-2 rounded-md text-center font-semibold hover:text-orange-400 hover:underline transition duration-300">
         {btnName}
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;
