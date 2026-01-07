import { useState, useEffect } from 'react';
import { Property } from '@/types/property';
import { X } from 'lucide-react';

interface PropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (property: Omit<Property, 'id' | 'createdAt'> & { id?: string }) => void;
  property?: Property | null;
}

const PropertyModal = ({ isOpen, onClose, onSave, property }: PropertyModalProps) => {
  const [formData, setFormData] = useState({
    title: '',
    type: 'house' as Property['type'],
    price: 0,
    location: '',
    bedrooms: 0,
    bathrooms: 0,
    area: 0,
    areaUnit: 'sqft' as Property['areaUnit'],
    description: '',
    image: '',
    featured: false,
    status: 'available' as Property['status'],
  });

  useEffect(() => {
    if (property) {
      setFormData({
        title: property.title,
        type: property.type,
        price: property.price,
        location: property.location,
        bedrooms: property.bedrooms || 0,
        bathrooms: property.bathrooms || 0,
        area: property.area,
        areaUnit: property.areaUnit,
        description: property.description,
        image: property.image,
        featured: property.featured,
        status: property.status,
      });
    } else {
      setFormData({
        title: '',
        type: 'house',
        price: 0,
        location: '',
        bedrooms: 0,
        bathrooms: 0,
        area: 0,
        areaUnit: 'sqft',
        description: '',
        image: '',
        featured: false,
        status: 'available',
      });
    }
  }, [property]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...formData,
      id: property?.id,
      bedrooms: formData.type === 'land' ? undefined : formData.bedrooms,
      bathrooms: formData.type === 'land' ? undefined : formData.bathrooms,
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-primary/50 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative bg-card rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-slide-up">
        <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
          <h2 className="font-serif text-2xl font-semibold text-foreground">
            {property ? 'Edit Property' : 'Add New Property'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-foreground mb-2">
                Property Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="input-field"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Property Type
              </label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value as Property['type'] })}
                className="input-field"
              >
                <option value="house">House</option>
                <option value="land">Land</option>
                <option value="apartment">Apartment</option>
                <option value="commercial">Commercial</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Status
              </label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as Property['status'] })}
                className="input-field"
              >
                <option value="available">Available</option>
                <option value="pending">Pending</option>
                <option value="sold">Sold</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Price ($)
              </label>
              <input
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                className="input-field"
                required
                min="0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Location
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="input-field"
                required
              />
            </div>

            {formData.type !== 'land' && (
              <>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Bedrooms
                  </label>
                  <input
                    type="number"
                    value={formData.bedrooms}
                    onChange={(e) => setFormData({ ...formData, bedrooms: Number(e.target.value) })}
                    className="input-field"
                    min="0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Bathrooms
                  </label>
                  <input
                    type="number"
                    value={formData.bathrooms}
                    onChange={(e) => setFormData({ ...formData, bathrooms: Number(e.target.value) })}
                    className="input-field"
                    min="0"
                  />
                </div>
              </>
            )}

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Area
              </label>
              <input
                type="number"
                value={formData.area}
                onChange={(e) => setFormData({ ...formData, area: Number(e.target.value) })}
                className="input-field"
                required
                min="0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Area Unit
              </label>
              <select
                value={formData.areaUnit}
                onChange={(e) => setFormData({ ...formData, areaUnit: e.target.value as Property['areaUnit'] })}
                className="input-field"
              >
                <option value="sqft">Square Feet</option>
                <option value="acres">Acres</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-foreground mb-2">
                Image URL
              </label>
              <input
                type="url"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="input-field"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-foreground mb-2">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="input-field min-h-[100px]"
                required
              />
            </div>

            <div className="md:col-span-2 flex items-center gap-2">
              <input
                type="checkbox"
                id="featured"
                checked={formData.featured}
                onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                className="w-5 h-5 rounded border-border text-secondary focus:ring-secondary"
              />
              <label htmlFor="featured" className="text-sm font-medium text-foreground">
                Featured Property
              </label>
            </div>
          </div>

          <div className="flex gap-4 pt-4 border-t border-border">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 btn-outline"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 btn-primary"
            >
              {property ? 'Update Property' : 'Add Property'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PropertyModal;
