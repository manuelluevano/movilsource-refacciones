import Card from "./Card";

const ListCard = ({ refacciones }) => {
  return (
    <>
      {refacciones && refacciones.length ? (
        <>
          {refacciones.map((item) => {
            // console.log("ITEM", item.id);
            return (
              <>
                <Card key={item.id} item={item} />
              </>
            );
          })}
        </>
      ) : null}
    </>
  );
};

export default ListCard;
