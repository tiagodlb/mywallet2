function Transaction(props) {
  const { date, description, value } = props;
  return (
    <section>
      <div>
        <p>{date}</p>
        <p>{description}</p>
      </div>
      <p>{value}</p>
    </section>
  );
}

export default Transaction;
