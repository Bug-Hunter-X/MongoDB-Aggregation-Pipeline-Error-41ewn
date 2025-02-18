```javascript
// Corrected aggregation pipeline
db.collection.aggregate([
  { $match: { field: { $exists: true } } }, // Ensure field exists
  { $group: { _id: '$field', count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 10 }
])
```