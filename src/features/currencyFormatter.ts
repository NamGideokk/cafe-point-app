// 화폐 단위(, = 콤마 추가) 출력용 함수
export default function currencyFormatter(value: string): string {
  return parseInt(value).toLocaleString("ko-KR");
}
