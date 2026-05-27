const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
        maxlength: [100, 'Title cannot exceed 100 characters']
    },
    amount: {
        type: Number,
        required: [true, 'Amount is required'],
        min: [0.01, 'Amount must be greater than 0']
    },
    category: {
        type: String,
        required: [true, 'Category is required'],
        enum: ['Food', 'Transport', 'Housing', 'Entertainment', 'Health', 'Shopping', 'Other'],
        message: '{VALUE} is not a valid category'
    },
    date: {
        type: Date,
        required: [true, 'Date is required'],
        default: Date.now
    },
    note: {
        type: String,
        trim: true,
        maxlength: [300, 'Note cannot exceed 300 characters']
    }
}, { timestamps: true });

expenseSchema.index({ userId: 1, date: -1 });

module.exports = mongoose.model('Expense', ExpenseSchema);