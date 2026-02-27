function PrimaryButton(ButtonProps: ButtonProps) {
    return (
        <button className={`btn btn-primary ${ButtonProps.bgColor} px-4 py-2 rounded-md text-${ButtonProps.textColor} font-medium transition-colors duration-300 hover:bg-indigo-700 transition-transform duration-300 hover:scale-105`}>
            {ButtonProps.Title}
        </button>
    );
};

export default PrimaryButton;

interface ButtonProps {
    Title: string;
    bgColor?: string;
    textColor: string;
}