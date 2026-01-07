import { Property } from '@/types/property';
import { MapPin, Bed, Bath, Maximize, Edit, Trash2 } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
  onEdit?: (property: Property) => void;
  onDelete?: (id: string) => void;
  showActions?: boolean;
}

const PropertyCard = ({ property, onEdit, onDelete, showActions = false }: PropertyCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      house: 'House',
      land: 'Land',
      apartment: 'Apartment',
      commercial: 'Commercial',
    };
    return labels[type] || type;
  };

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      available: 'bg-green-500',
      pending: 'bg-yellow-500',
      sold: 'bg-red-500',
    };
    return colors[status] || 'bg-gray-500';
  };

  return (
    <div className="card-property group">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
            {getTypeLabel(property.type)}
          </span>
          {property.featured && (
            <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full">
              Featured
            </span>
          )}
        </div>

        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 ${getStatusColor(property.status)} text-primary-foreground text-xs font-semibold rounded-full capitalize`}>
            {property.status}
          </span>
        </div>

        {/* Price Tag */}
        <div className="absolute bottom-4 left-4">
          <span className="px-4 py-2 bg-card/95 backdrop-blur-sm text-foreground font-bold text-lg rounded-lg shadow-lg">
            {formatPrice(property.price)}
          </span>
        </div>

        {/* Actions */}
        {showActions && (
          <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => onEdit?.(property)}
              className="p-2 bg-card/95 backdrop-blur-sm rounded-lg hover:bg-secondary transition-colors"
              aria-label="Edit property"
            >
              <Edit size={18} className="text-foreground" />
            </button>
            <button
              onClick={() => onDelete?.(property.id)}
              className="p-2 bg-card/95 backdrop-blur-sm rounded-lg hover:bg-destructive transition-colors"
              aria-label="Delete property"
            >
              <Trash2 size={18} className="text-foreground" />
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-serif text-xl font-semibold text-foreground mb-2 line-clamp-1">
          {property.title}
        </h3>

        <div className="flex items-center gap-1 text-muted-foreground mb-3">
          <MapPin size={16} />
          <span className="text-sm">{property.location}</span>
        </div>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {property.description}
        </p>

        {/* Property Details */}
        <div className="flex items-center gap-4 pt-4 border-t border-border">
          {property.bedrooms !== undefined && (
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Bed size={16} />
              <span>{property.bedrooms} Beds</span>
            </div>
          )}
          {property.bathrooms !== undefined && (
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Bath size={16} />
              <span>{property.bathrooms} Baths</span>
            </div>
          )}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Maximize size={16} />
            <span>
              {property.area.toLocaleString()} {property.areaUnit}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
