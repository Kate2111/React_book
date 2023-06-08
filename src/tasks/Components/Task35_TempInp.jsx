export default function TempInp_1({temp, type, calculateTemp}) {
    return <>
        {type === 'celsius' ? (
            <input
              type="number"
              placeholder="градусы Цельсия"
              value={temp}
              onChange={(event) => calculateTemp(event, 'celsius')}
            />
          ) : (
            <input
              type="number"
              placeholder="градусы Фаренгейта"
              value={temp}
              onChange={(event) => calculateTemp(event, 'fahrenheit')}
            />
          )}
    </>
}