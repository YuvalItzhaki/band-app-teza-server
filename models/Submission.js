import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema(
  {
    name: String,
    band: String,
    year: Number,
    isEven: Boolean,
    generatedText: String,
    generatedImageUrl: String,
    stats: Object,
  },
  { timestamps: true }
);

const Submission = mongoose.model("Submission", submissionSchema);

export default Submission;
