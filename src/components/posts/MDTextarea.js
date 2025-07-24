export const DropHandler = (event, setValue, getValue) => {
    // 현재 커서 위치, textarea에 들어있는 값 불러옴
    const start = event.target.selectionStart;
    const end = event.target.selectionEnd;
    const value = event.target.value;

    // 이미지 드롭 했을 때 이미지 링크가 쌩으로 추가되는 것을 금지
    event.preventDefault();
    event.stopPropagation();

    // 마크다운 방식에 맞게 url가공
    const url = event.dataTransfer.getData("text/plain");
    const imgMatch = url.match(/imgurl=([^&]+)/);
    const cleanedUrl = imgMatch ? decodeURIComponent(imgMatch[1]) : url;
    const text = "<br>![image](" + cleanedUrl + ")<br>";

    const newText = value.slice(0, start) + text + value.slice(end);

    // 원래 문자열에 이미지 태그 추가 후 getRef에도 업데이트
    setValue(newText);
    getValue.current = newText;
}