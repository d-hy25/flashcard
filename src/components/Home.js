
const Home = ({categories,onSelected}) => {
  // console.log( categories );
  return (
    <div>
      <h1>학습 카테고리</h1>
      {/* 버튼으로 name 값을 만들어 주기 */}
      {
        categories.map((obj)=>{
          return <button 
                    key={obj.id}
                    onClick={()=>{ onSelected(obj) }}
                  >{obj.name}</button>
        })
      }
    </div>
    );
};

export default Home;