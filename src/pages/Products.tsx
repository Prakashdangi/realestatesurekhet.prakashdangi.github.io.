import { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import PropertyCard from '@/components/PropertyCard';
import PropertyModal from '@/components/PropertyModal';
import Footer from '@/components/Footer';
import { Property } from '@/types/property';
import { initialProperties } from '@/data/properties';
import { Plus, Search, Filter, X } from 'lucide-react';
import { toast } from 'sonner';
import property1 from '@/assets/property-1.jpg';

const Products = () => {
  const [properties, setProperties] = useState<Property[]>(initialProperties);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProperty, setEditingProperty] = useState<Property | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('newest');

  const filteredProperties = useMemo(() => {
    let filtered = [...properties];

    // Search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(term) ||
          p.location.toLowerCase().includes(term) ||
          p.description.toLowerCase().includes(term)
      );
    }

    // Type filter
    if (filterType !== 'all') {
      filtered = filtered.filter((p) => p.type === filterType);
    }

    // Status filter
    if (filterStatus !== 'all') {
      filtered = filtered.filter((p) => p.status === filterStatus);
    }

    // Sorting
    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case 'oldest':
        filtered.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
        break;
    }

    return filtered;
  }, [properties, searchTerm, filterType, filterStatus, sortBy]);

  const handleSaveProperty = (propertyData: Omit<Property, 'id' | 'createdAt'> & { id?: string }) => {
    if (propertyData.id) {
      // Update existing property
      setProperties((prev) =>
        prev.map((p) =>
          p.id === propertyData.id
            ? { ...p, ...propertyData, id: p.id, createdAt: p.createdAt }
            : p
        )
      );
      toast.success('Property updated successfully!');
    } else {
      // Add new property
      const newProperty: Property = {
        ...propertyData,
        id: Date.now().toString(),
        image: propertyData.image || property1,
        createdAt: new Date(),
      };
      setProperties((prev) => [newProperty, ...prev]);
      toast.success('Property added successfully!');
    }
    setEditingProperty(null);
  };

  const handleEdit = (property: Property) => {
    setEditingProperty(property);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this property?')) {
      setProperties((prev) => prev.filter((p) => p.id !== id));
      toast.success('Property deleted successfully!');
    }
  };

  const handleAddNew = () => {
    setEditingProperty(null);
    setIsModalOpen(true);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setFilterType('all');
    setFilterStatus('all');
    setSortBy('newest');
  };

  const hasActiveFilters = searchTerm || filterType !== 'all' || filterStatus !== 'all' || sortBy !== 'newest';

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 bg-primary">
        <div className="container-main px-4">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Our Properties
          </h1>
          <p className="text-primary-foreground/80 max-w-2xl">
            Browse our complete collection of {properties.length}+ properties including 
            houses, land, apartments, and commercial spaces.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-card border-b border-border sticky top-20 z-40">
        <div className="container-main px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md w-full">
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search properties..."
                className="input-field pl-12"
              />
            </div>

            {/* Filter Controls */}
            <div className="flex flex-wrap gap-3 items-center">
              <div className="flex items-center gap-2">
                <Filter size={18} className="text-muted-foreground" />
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="input-field py-2 w-auto"
                >
                  <option value="all">All Types</option>
                  <option value="house">Houses</option>
                  <option value="land">Land</option>
                  <option value="apartment">Apartments</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>

              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="input-field py-2 w-auto"
              >
                <option value="all">All Status</option>
                <option value="available">Available</option>
                <option value="pending">Pending</option>
                <option value="sold">Sold</option>
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="input-field py-2 w-auto"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>

              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X size={16} />
                  Clear
                </button>
              )}

              <button
                onClick={handleAddNew}
                className="btn-primary flex items-center gap-2"
              >
                <Plus size={18} />
                Add Property
              </button>
            </div>
          </div>

          {/* Results Count */}
          <p className="mt-4 text-sm text-muted-foreground">
            Showing {filteredProperties.length} of {properties.length} properties
          </p>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="section-padding">
        <div className="container-main px-4">
          {filteredProperties.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground mb-4">No properties found</p>
              <button onClick={clearFilters} className="btn-outline">
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  showActions
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Property Modal */}
      <PropertyModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingProperty(null);
        }}
        onSave={handleSaveProperty}
        property={editingProperty}
      />

      <Footer />
    </div>
  );
};

export default Products;
