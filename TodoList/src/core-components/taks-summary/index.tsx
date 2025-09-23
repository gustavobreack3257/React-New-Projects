import Badge from "../../components/badge";
import Text from "../../components/text";
export default function TasksSummary() {
  return (
    <>
      <div className="flex items-center gap-2">
        <Text className="!text-gray-300" variant="body-sm-bold">
          Tarefas criadas
        </Text>
        <Badge variant="secondary">5</Badge>
      </div>

      <div className="flex items-center gap-2">
        <Text className="!text-gray-300" variant="body-sm-bold">
          Concluidas
        </Text>
        <Badge variant="primary">5</Badge>
      </div>
    </>
  );
}
