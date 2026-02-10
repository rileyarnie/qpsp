export const KeyRecommendation: React.FC<{ expandable?: boolean }> = ({
  expandable,
}) => {
  return (
    <div className="bg-linear-to-r from-yellow-50 to-gray-50 border-l-4  border-yellow-500 rounded-lg p-5">
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-2">
            {expandable ? "Medium Priority" : "Key Recommendation"}
          </h3>
          <p className="text-gray-900 mb-3">
            Start entrepreneurship fundamentals course and explore business
            ideas.{" "}
          </p>
          <p className="text-sm text-gray-600 mb-3">
            Your Entrepreneurship score is 50%, which needs attention
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Area: </span>
            Entrepreneurship
          </p>
        </div>
      </div>
    </div>
  );
};
