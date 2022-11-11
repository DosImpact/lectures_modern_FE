
### 모노 레포 vs 멀티 레포  

모노 레포 : 모든 서비스의 코드를 하나의 저장소에서 관리하자.   

Pros  

    - 공통되는 코드를 자유롭게 공유
    - 사용하는 패키지의 버전을 쉽게 통일
    - 비용없이 새로운 서비스 구축
    - 서비스 관리 비용 절감   

Cons

    - 긴 빌드 시간 ( 20분 ~ 1시간?! )  
    - 하나의 변경이 다른 서비스 영향  
    - 서비스별 베포를 할 수 없음  
    - 서비스별 캐싱 정책을 가져가기 어렵  


멀티 레포 : 하나의 서비스를 위해 마이크로단위의 레포로 관리하자.  


Pros  

    - 서비스 별로 자유로운 의존성 선택
    - eg) Redux,RxJS | MobX storybook.    
    - 획기적인 빌드 타임 감소  
    - 하나의 서비스 변경은, 다른 서비스에 영향 X  
    - 서비스별 베포 O. 
    - 서비스별 캐싱 정책 O 

Cons

    - 공통 코드를 공유하기 어려움  
    - 사용하는 라이브러리의 버전 파편화  
    - 새로운 서비스 구축에 큰 비용  
    - 서비스 관리가 복잡  
