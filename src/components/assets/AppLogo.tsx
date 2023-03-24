export default function AppLogo({ classes = "" }: AppLogoProps) {
    return (
        <div className={`p-4 ${classes} relative -top-2`}>
            <BrandName />
            <span className="text-xs text-sky-800 absolute bottom-1 right-1">Freelancing.</span>
        </div>
    );
}

type AppLogoProps = {
    classes?: string;
};

export const BrandName = () => (
    <h5 className="h6">
        Best<b className="text-green-800">o</b>
    </h5>
);
