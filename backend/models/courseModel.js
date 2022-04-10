import mongoose from 'mongoose'

const reviewsSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const stacksSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    imageUrl: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const notesSchema = mongoose.Schema(
  {
    text: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const featuresSchema = mongoose.Schema(
  {
    text: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const courseSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    language: {
      type: String,
      required: true,
    },
    reviews: [reviewsSchema],
    stacks: [stacksSchema],
    notes: [notesSchema],
    features: [featuresSchema],
  },
  {
    timestamps: true,
  }
)

const Course = mongoose.model('Course', courseSchema)

export default Course
