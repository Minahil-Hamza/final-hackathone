// context/WishlistContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface WishlistContextType {
  wishlist: any[]; // Define the type for wishlist
  addToWishlist: (item: any) => void;
  removeFromWishlist: (item: any) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<any[]>([]);

  const addToWishlist = (item: any) => {
    setWishlist((prev) => [...prev, item]);
  };

  const removeFromWishlist = (item: any) => {
    setWishlist((prev) => prev.filter((wishlistItem) => wishlistItem.id !== item.id));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
