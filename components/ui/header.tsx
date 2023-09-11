interface Props {
  title: string;
  description: string;
}

const Header = ({ title, description }: Props) => {
  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      <p className="ml-1 text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export default Header;
