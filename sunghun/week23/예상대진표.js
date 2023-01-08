// 정확성  테스트
// 테스트 1 〉	통과 (0.07ms, 33.3MB)
// 테스트 2 〉	통과 (0.05ms, 33.5MB)
// 테스트 3 〉	통과 (0.08ms, 33.4MB)
// 테스트 4 〉	통과 (0.05ms, 33.4MB)
// 테스트 5 〉	통과 (0.06ms, 33.4MB)
// 테스트 6 〉	통과 (0.05ms, 33.4MB)
// 테스트 7 〉	통과 (0.06ms, 33.4MB)
// 테스트 8 〉	통과 (0.05ms, 33.4MB)
// 테스트 9 〉	통과 (0.05ms, 33.5MB)
// 테스트 10 〉	통과 (0.05ms, 33.4MB)
// 테스트 11 〉	통과 (0.05ms, 33.4MB)
// 테스트 12 〉	통과 (0.06ms, 33.5MB)
// 테스트 13 〉	통과 (0.05ms, 33.4MB)
// 테스트 14 〉	통과 (0.05ms, 33.4MB)
// 테스트 15 〉	통과 (0.05ms, 33.4MB)
// 테스트 16 〉	통과 (0.05ms, 33.4MB)
// 테스트 17 〉	통과 (0.05ms, 33.4MB)
// 테스트 18 〉	통과 (0.05ms, 33.5MB)
// 테스트 19 〉	통과 (0.05ms, 33.4MB)
// 테스트 20 〉	통과 (0.08ms, 33.4MB)
// 테스트 21 〉	통과 (0.05ms, 33.4MB)
// 테스트 22 〉	통과 (0.05ms, 33.4MB)
// 테스트 23 〉	통과 (0.05ms, 33.4MB)
// 테스트 24 〉	통과 (0.05ms, 33.4MB)
// 테스트 25 〉	통과 (0.05ms, 33.5MB)
// 테스트 26 〉	통과 (0.05ms, 33.4MB)
// 테스트 27 〉	통과 (0.13ms, 33.5MB)
// 테스트 28 〉	통과 (0.13ms, 33.5MB)
// 테스트 29 〉	통과 (0.05ms, 33.4MB)
// 테스트 30 〉	통과 (0.13ms, 33.4MB)
// 테스트 31 〉	통과 (0.05ms, 33.5MB)
// 테스트 32 〉	통과 (0.05ms, 33.3MB)
// 테스트 33 〉	통과 (0.13ms, 33.4MB)
// 테스트 34 〉	통과 (0.14ms, 33.4MB)

function solution(n,a,b)
{
    // n : 대회참가인원
    // a : A번 참가자 번호
    // b : B번 참가자 번호
    let A = a;
    let B = b;
    
    let count = 1;
    
    if ((Math.abs(A-B) === 1) && Math.min(A,B) % 2 !== 0){
        return count;
    }
    
    while(A+B > 3){
        A = Math.ceil(A / 2);
        B = Math.ceil(B / 2);
        
        if (Math.abs(B - A) / 1 === 1){
            if(Math.min(A,B) % 2 !== 0){
                count++;
                return count;
            }
            
        }
        count++;
    }
}