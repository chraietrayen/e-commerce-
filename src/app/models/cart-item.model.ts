// Ensure you have this file and it contains the following interface
export interface CartItem {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    quantity: number;  // Ensure quantity exists here to calculate the total
  }
  