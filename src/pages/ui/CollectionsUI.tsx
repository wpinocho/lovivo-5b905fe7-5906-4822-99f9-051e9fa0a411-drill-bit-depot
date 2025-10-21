import { EcommerceTemplate } from '@/templates/EcommerceTemplate'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { Package, ArrowRight, Layers } from 'lucide-react'
import type { Collection } from '@/components/headless/HeadlessCollections'

/**
 * EDITABLE UI COMPONENT - CollectionsUI
 * 
 * Este componente solo maneja la presentación de la página de colecciones.
 * Recibe toda la lógica como props del HeadlessCollections.
 */

interface CollectionsUIProps {
  logic: {
    collections: Collection[]
    loading: boolean
    handleViewCollection: (collectionId: string) => void
  }
}

export const CollectionsUI = ({ logic }: CollectionsUIProps) => {
  const { collections, loading, handleViewCollection } = logic

  return (
    <EcommerceTemplate pageTitle="Nuestras Colecciones">
      <div className="py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Layers className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Explora Nuestras Colecciones
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encuentra la colección perfecta de brocas para tu proyecto. Organizadas por tipo de material y uso.
          </p>
        </div>

        {/* Collections Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="h-64 w-full" />
                <CardContent className="p-6">
                  <Skeleton className="h-6 w-3/4 mb-3" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-5/6" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : collections.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <Card 
                key={collection.id} 
                className="overflow-hidden hover-lift cursor-pointer group border-2 border-border hover:border-primary transition-all"
                onClick={() => handleViewCollection(collection.id)}
              >
                {/* Collection Image */}
                <div className="relative h-64 bg-muted overflow-hidden">
                  {collection.image ? (
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Package className="h-16 w-16 text-muted-foreground" />
                    </div>
                  )}
                  
                  {/* Overlay with product count */}
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold">
                      {collection.product_handles?.length || 0} productos
                    </span>
                  </div>
                </div>

                {/* Collection Info */}
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {collection.name}
                  </h3>
                  
                  {collection.description && (
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {collection.description}
                    </p>
                  )}

                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleViewCollection(collection.id)
                    }}
                  >
                    Ver Productos
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-muted rounded-full mb-4">
              <Package className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No hay colecciones disponibles</h3>
            <p className="text-muted-foreground">
              Pronto agregaremos nuevas colecciones de productos.
            </p>
          </div>
        )}

        {/* Benefits Section */}
        <div className="mt-16 bg-muted/30 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-center mb-8">
            ¿Por Qué Comprar por Colecciones?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Organizado por Uso</h3>
              <p className="text-sm text-muted-foreground">
                Encuentra fácilmente las brocas según el material que vas a trabajar
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
                <Layers className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Sets Completos</h3>
              <p className="text-sm text-muted-foreground">
                Ahorra comprando colecciones completas para tener todo lo que necesitas
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
                <ArrowRight className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Fácil Navegación</h3>
              <p className="text-sm text-muted-foreground">
                Explora productos relacionados sin perderte en el catálogo
              </p>
            </div>
          </div>
        </div>
      </div>
    </EcommerceTemplate>
  )
}