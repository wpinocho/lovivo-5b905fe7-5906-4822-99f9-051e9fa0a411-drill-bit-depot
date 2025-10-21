import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '@/lib/supabase'
import { STORE_ID } from '@/lib/config'

/**
 * FORBIDDEN HEADLESS COMPONENT - HeadlessCollections
 * 
 * Este componente contiene toda la lógica de negocio de la página de colecciones:
 * - Fetching de colecciones desde Supabase
 * - Navegación a productos de colección
 * - Estados de carga
 */

export interface Collection {
  id: string
  name: string
  description: string
  handle: string
  image: string
  product_handles: string[]
  created_at: string
}

export const useCollectionsLogic = () => {
  const navigate = useNavigate()
  const [collections, setCollections] = useState<Collection[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCollections()
  }, [])

  const fetchCollections = async () => {
    try {
      const { data, error } = await supabase
        .from('collections')
        .select('*')
        .eq('store_id', STORE_ID)
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching collections:', error)
        return
      }

      setCollections(data || [])
    } catch (error) {
      console.error('Error fetching collections:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleViewCollection = (collectionId: string) => {
    navigate(`/?collection=${collectionId}`)
  }

  return {
    collections,
    loading,
    handleViewCollection
  }
}

interface HeadlessCollectionsProps {
  children: (logic: ReturnType<typeof useCollectionsLogic>) => React.ReactNode
}

export const HeadlessCollections = ({ children }: HeadlessCollectionsProps) => {
  const collectionsLogic = useCollectionsLogic()
  
  return <>{children(collectionsLogic)}</>
}