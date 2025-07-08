import { stepsOrder } from '../../../constants/Constant';

const StepsFragment = ({ currentStep = 2 }) => {
    return (
        <div className="relative w-10/12 flex justify-between items-center max-w-4xl mx-auto px-4">
            <div className="absolute top-1/2 left-0 w-full h-3 rounded-full bg-gray-300 z-0 transform -translate-y-1/2" />
            <div
                className="absolute top-1/2 left-0 h-3 rounded-full bg-green-success z-10 transform -translate-y-1/2"
                style={{ width: `${(currentStep / (stepsOrder.length - 1)) * 100}%` }}
            />
            {stepsOrder.map((step, index) => {
                const isCompleted = index < currentStep;
                const isCurrent = index === currentStep;

                return (
                    <div key={index} className="flex flex-col items-center z-20">
                        <div
                            className={`
                w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold
                ${isCompleted || isCurrent ? "bg-green-success text-white" : "border border-dashed border-green-success text-green-success"}
              `}
                        >
                            {isCompleted ? "✓" : step.number}
                        </div>
                        {/* Label */}
                        <span
                            className={`
                mt-2 text-sm 
                ${isCompleted || isCurrent ? "text-green-600" : "text-gray-400"}
              `}
                        >
                            {step.label}
                        </span>
                    </div>
                );
            })}
        </div>
    );
};
export default StepsFragment