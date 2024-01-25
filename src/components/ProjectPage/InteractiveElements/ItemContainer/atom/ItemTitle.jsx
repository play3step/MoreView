function ItemTitle({ title }) {
  return (
    <div
      style={{
        width: '4.513vw',
        height: '3.05vh',
        border: '1px solid',
        borderRadius: '25px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.1111vw',
        marginBottom: '0.8vh',
      }}
    >
      {title}
    </div>
  );
}

export default ItemTitle;
