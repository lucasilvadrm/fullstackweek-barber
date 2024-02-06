import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <Loader2 className="mr-2 h-8 w-8 animate-spin" />
      <h1>Carregando</h1>
    </div>
  );
};

export default Loading;
