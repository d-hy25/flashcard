
const DetailList = ({selected,onSelected,onChangeMode}) => {  
  return (
    <div className="detail-list">
      <h2>{selected.name} 플래시카드</h2>
      <ul>
        {/* li요소를 이용하여 작성 */}
        {
          selected.flashcards.map( (obj)=>{
            return <li key={obj.id}>{obj.question}</li>
          })
        }
      </ul>
      <button onClick={()=>{ onChangeMode(true) }}>학습시작</button>
      <button onClick={()=>{ onSelected(null) }}>뒤로가기</button>
    </div>
  );
};

export default DetailList;