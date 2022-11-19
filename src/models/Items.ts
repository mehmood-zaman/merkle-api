import mongoose from './';
const Schema = mongoose.Schema;

interface ItemTypes {
  name: string;
  price: number;
}

const itemSchema = new Schema<ItemTypes>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

const Item = mongoose.model<ItemTypes>('Items', itemSchema);

export default Item;
