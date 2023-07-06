import Card from "./Card";

const ListCard = ({ refacciones }) => {
  return (
    <>
      {refacciones && refacciones.length ? (
        <>
          {refacciones.map((item) => {
            // console.log("ITEM", item);
            return (
              <>
                <Card key={item.id} item={item} refacciones={refacciones} />
              </>
            );
          })}
        </>
      ) : null}
    </>
  );
};

export default ListCard;
