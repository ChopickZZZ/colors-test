export interface ColorItem {
   id: string,
   title: string,
   image: string,
   price: number,
   amount: number,
   new: boolean,
   contract: boolean,
   createdAt: string,
   exclusive: boolean,
   sale: boolean | number,
   soldTimes: number
}

export type Filter = 'new' | 'avaliable' | 'contract' | 'exclusive' | 'sale'