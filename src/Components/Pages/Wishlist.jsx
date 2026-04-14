import React, { useEffect, useState } from 'react';

const Wishlist = () => {
  const [ wishlist, setWishlist ] = useState([]);

  useEffect (() => {
    const storeWishlist = JSON.parse(localStorage.getItem('wishlistItem'));
    setWishlist(storeWishlist);
  }, [])

  const removeFromWishlist = (id) => {
    Swal.fire({
      title: 'Are You Sure?',
      text: 'Do you want to remove this item from wishlist?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#aaa',
      confirmButtonText: 'Yes, remove it!',
    }) .then((result) => {
      if (result.isConfirmed) {
        const updatedWishlist = wishlist.filter(item => item.id !== )
      }
    })
  }
  return (
    <div>Wishlist</div>
  );
}
export default Wishlist;
