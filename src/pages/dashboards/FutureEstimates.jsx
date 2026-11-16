const FutureEstimates = () => {
  return (
    <div className="p-8 max-w-6xl mx-auto text-gray-800 font-sans">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Future estimates</h1>
      <p className="text-gray-500 mb-8">Machine learning forecasts for upcoming months based on historical data.</p>

      {/* Prediction Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="border rounded-lg p-6 bg-white shadow-sm border-t-4 border-t-[#1b4332]">
          <h3 className="text-gray-600 font-medium mb-1">Predicted Yield (Next Month)</h3>
          <p className="text-4xl font-bold text-gray-900">
            14,200 <span className="text-lg text-gray-500 font-normal">kg</span>
          </p>
          <p className="text-sm mt-2 text-gray-500">Expected increase of 8% due to weather patterns.</p>
        </div>

        <div className="border rounded-lg p-6 bg-white shadow-sm border-t-4 border-t-[#2d6a4f]">
          <h3 className="text-gray-600 font-medium mb-1">Estimated Revenue</h3>
          <p className="text-4xl font-bold text-gray-900">
            <span className="text-lg text-gray-500 font-normal">LKR</span> 9.5M
          </p>
          <p className="text-sm mt-2 text-gray-500">Based on current market export rates.</p>
        </div>
      </div>

      {/* Chart Area */}
      <div className="border rounded-lg p-6 bg-white shadow-sm h-96 flex flex-col justify-center items-center text-gray-400">
        <p className="mb-2">📈 [ ML Prediction Chart Area ]</p>
        <p className="text-sm text-center max-w-md">
          Member 4 will integrate the Recharts line chart here to show actual vs predicted data fetched from the FastAPI backend.
        </p>
      </div>
    </div>
  );
};

export default FutureEstimates;
