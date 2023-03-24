import { IconType } from "react-icons";

type Props = {
    Icon: IconType;
    title: string;
    description: React.ReactNode;
};

export default function SuggestionCard({ description, Icon, title }: Props) {
    return (
        <div className="p-3 space-y-4 max-w-[280px] overflow-hidden">
            <div className="space-y-6">
                <h4 className="text-4xl">
                    <Icon />
                </h4>
                <h4 className="h6">{title}</h4>
            </div>
            <article>{description}</article>
        </div>
    );
}
