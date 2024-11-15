// 1. Créer la base de données et la collection
use shopDB;
db.createCollection("products");

// 2. Ajouter un produit
db.products.insertOne({
    product_id: 1,
    name: "nokya",
    category: "electronique",
    price: 299,
    stock: 100
});

// 3. Ajouter plusieurs produits dans la même catégorie
db.products.insertMany([
    { product_id: 2, name: "Ordinateur portable", category: "Électronique", price: 999, stock: 50 },
    { product_id: 3, name: "Tablette", category: "Électronique", price: 199, stock: 200 }
]);

// 4. Récupérer tous les produits
db.products.find();

// 5. Filtrer les produits ayant un prix inférieur à 100
db.products.find({ price: { $lt: 100 } });

// 6. Récupérer les produits d'une catégorie spécifique (par exemple, "Électronique")
db.products.find({ category: "Électronique" });

// 7. Augmenter le prix de 10% pour les produits ayant un stock supérieur à 50
db.products.updateMany(
    { stock: { $gt: 50 } },
    { $mul: { price: 1.10 } }
);

// 8. Supprimer un produit spécifique en fonction de son ID
db.products.deleteOne({ product_id: 1 });

// 9. Ajouter un champ 'onSale' pour les produits ayant un prix inférieur à 50
db.products.updateMany(
    { price: { $lt: 50 } },
    { $set: { onSale: true } }
);

// 10. Supprimer tous les produits ayant un stock de 0
db.products.deleteMany({ stock: 0 });
