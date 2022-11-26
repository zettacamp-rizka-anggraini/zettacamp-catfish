export interface DetailTransaction {
    id: string,
    menu: {
        _id:string,
        amount: number,
        total_recipe: number,
        note:string,
        recipe_id: {
            id:string,
            image:string,
            price: string
        }
    }
    order_date: string,
    order_status: string,
    total: number
} 