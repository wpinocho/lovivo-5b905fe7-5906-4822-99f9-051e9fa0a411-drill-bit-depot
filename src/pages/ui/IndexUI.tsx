import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { CollectionCard } from '@/components/CollectionCard';
import { FloatingCart } from '@/components/FloatingCart';
import { NewsletterSection } from '@/components/NewsletterSection';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';
import { Drill, Shield, Truck, Award, CheckCircle, Star, Zap } from 'lucide-react';

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    loading,
    loadingCollections,
    selectedCollectionId,
    filteredProducts,
    handleViewCollectionProducts,
    handleShowAllProducts,
  } = logic;

  return (
    <EcommerceTemplate showCart={true}>
      {/* Hero Section - Educativo para no expertos */}
      <section className="gradient-industrial py-20 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                ✨ Herramientas Profesionales al Alcance de Todos
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Brocas de Calidad Profesional para Cada Proyecto
              </h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                No necesitas ser experto. Nuestras brocas están diseñadas para que cualquier persona pueda hacer trabajos profesionales en casa.
              </p>
              
              {/* Beneficios clave para no expertos */}
              <div className="space-y-3 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Fáciles de usar</p>
                    <p className="text-sm text-muted-foreground">Funcionan con cualquier taladro estándar</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Duran hasta 5 veces más</p>
                    <p className="text-sm text-muted-foreground">Ahorra dinero a largo plazo</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Resultados perfectos</p>
                    <p className="text-sm text-muted-foreground">Sin astillas ni grietas en tus materiales</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 text-lg">
                  Ver Productos
                </Button>
                <Button size="lg" variant="outline" className="font-semibold border-2">
                  Guía para Principiantes
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&h=800&fit=crop"
                  alt="Brocas profesionales"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm">Productos Disponibles</div>
              </div>
              <div className="absolute -top-6 -right-6 bg-background border-2 border-primary p-4 rounded-xl shadow-xl">
                <div className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <div>
                    <div className="text-2xl font-bold text-foreground">4.9</div>
                    <div className="text-xs text-muted-foreground">+2,000 reseñas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos - Educativo */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              ¿Por Qué Nuestras Brocas Son Diferentes?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Diseñadas pensando en personas como tú que quieren hacer trabajos de calidad sin complicaciones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Calidad Garantizada</h3>
              <p className="text-muted-foreground text-sm">
                Materiales de grado profesional que duran años, no meses
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Envío Rápido</h3>
              <p className="text-muted-foreground text-sm">
                Entrega en 2-5 días a toda la República Mexicana
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Garantía de Satisfacción</h3>
              <p className="text-muted-foreground text-sm">
                30 días para devolución si no estás 100% satisfecho
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Fácil de Usar</h3>
              <p className="text-muted-foreground text-sm">
                Incluimos guías y consejos para cada tipo de broca
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guía rápida para principiantes */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              ¿No Sabes Cuál Broca Necesitas?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Te ayudamos a elegir la broca perfecta según tu proyecto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-background border-2 border-border rounded-xl p-6 hover:border-primary transition-colors">
              <div className="text-4xl mb-4">🪵</div>
              <h3 className="font-bold text-xl mb-3">Para Madera</h3>
              <p className="text-muted-foreground mb-4">
                Perfectas para muebles, repisas, marcos. No astillan ni rompen la madera.
              </p>
              <Button variant="outline" className="w-full">Ver Brocas para Madera</Button>
            </div>

            <div className="bg-background border-2 border-border rounded-xl p-6 hover:border-primary transition-colors">
              <div className="text-4xl mb-4">🔩</div>
              <h3 className="font-bold text-xl mb-3">Para Metal</h3>
              <p className="text-muted-foreground mb-4">
                Ideales para puertas, ventanas, estructuras metálicas. Cortan limpio y rápido.
              </p>
              <Button variant="outline" className="w-full">Ver Brocas para Metal</Button>
            </div>

            <div className="bg-background border-2 border-border rounded-xl p-6 hover:border-primary transition-colors">
              <div className="text-4xl mb-4">🧱</div>
              <h3 className="font-bold text-xl mb-3">Para Concreto</h3>
              <p className="text-muted-foreground mb-4">
                Para paredes, pisos, instalaciones. Penetran sin esfuerzo y sin polvo excesivo.
              </p>
              <Button variant="outline" className="w-full">Ver Brocas para Concreto</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      {!loadingCollections && collections.length > 0 && (
        <section className="py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Explora Nuestras Categorías
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Encuentra exactamente lo que necesitas para tu proyecto
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {collections.map((collection) => (
                <CollectionCard 
                  key={collection.id} 
                  collection={collection} 
                  onViewProducts={handleViewCollectionProducts} 
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                {selectedCollectionId 
                  ? `${collections.find(c => c.id === selectedCollectionId)?.name || 'Colección'}` 
                  : 'Productos Destacados'
                }
              </h2>
              <p className="text-muted-foreground">
                {selectedCollectionId 
                  ? collections.find(c => c.id === selectedCollectionId)?.description
                  : 'Las brocas más vendidas y mejor valoradas por nuestros clientes'
                }
              </p>
            </div>
            {selectedCollectionId && (
              <Button 
                variant="outline" 
                onClick={handleShowAllProducts}
                className="hidden md:flex"
              >
                Ver Todos los Productos
              </Button>
            )}
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-muted rounded-lg h-96 animate-pulse"></div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No hay productos disponibles en esta colección.
              </p>
            </div>
          )}
          
          {selectedCollectionId && (
            <div className="mt-8 text-center md:hidden">
              <Button 
                variant="outline" 
                onClick={handleShowAllProducts}
                className="w-full sm:w-auto"
              >
                Ver Todos los Productos
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Confiado por Miles de Mexicanos
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Únete a miles de personas que ya están haciendo sus proyectos con nuestras brocas profesionales
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-muted/50 rounded-xl p-6 border border-border">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">
                "Nunca había usado brocas tan buenas. Hice toda la instalación de mi cocina sin problemas. ¡Súper recomendadas!"
              </p>
              <p className="text-sm text-muted-foreground font-semibold">- María G., Ciudad de México</p>
            </div>

            <div className="bg-muted/50 rounded-xl p-6 border border-border">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">
                "Excelente calidad y llegaron rapidísimo. El servicio al cliente me ayudó a elegir las correctas para mi proyecto."
              </p>
              <p className="text-sm text-muted-foreground font-semibold">- Carlos R., Monterrey</p>
            </div>

            <div className="bg-muted/50 rounded-xl p-6 border border-border">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-foreground mb-4 italic">
                "Compré el set completo y no me arrepiento. Ahora puedo hacer cualquier reparación en casa sin llamar a nadie."
              </p>
              <p className="text-sm text-muted-foreground font-semibold">- Ana L., Guadalajara</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
            <div className="text-2xl font-bold">10,000+ Clientes Satisfechos</div>
            <div className="text-2xl font-bold">★★★★★ 4.9/5</div>
            <div className="text-2xl font-bold">Envíos a Toda México</div>
          </div>
        </div>
      </section>

      {/* Garantía y Confianza */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Compra con Total Confianza
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Si no estás 100% satisfecho con tu compra, te devolvemos tu dinero. Sin preguntas.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-lg">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-6 w-6" />
              <span>Garantía de 30 días</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-6 w-6" />
              <span>Envío gratis en pedidos +$500</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-6 w-6" />
              <span>Pago seguro</span>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

      <FloatingCart />
    </EcommerceTemplate>
  );
};