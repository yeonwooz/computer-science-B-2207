## MVP 패턴

> **비즈니스 로직과 유저 인터페이스를 분리하기 위해서 고안된 방법** <br/> **MVC패턴을 개선**

### MVC 패턴과의 차이

Controller가 유저 액션을 받아서 Model데이터를 업데이트하고 여러개의 View중 어떤 View를 보여줄지 결정하는 것과 달리, Presenter는 View와 1대1 관계를 맺고 유저액션이 발생했을 때 View에 의해 호출된다. 또한 View와 Presetner의 관계는 서로 의존적이지 않은데, 그 이유는 특정 Presenter에서 특정 View를 import 해오는 것이 아니라 인터페이스를 통해 연결되기 때문이다. 그래서 각 Presenter 의 모듈화와 유닛테스트가 쉽다.


[<img src="https://media.geeksforgeeks.org/wp-content/uploads/20201024233154/MVPSchema.png" width="400"/>](https://media.geeksforgeeks.org/wp-content/uploads/20201024233154/MVPSchema.png)<br/>
[출처](https://www.geeksforgeeks.org/mvp-model-view-presenter-architecture-pattern-in-android-with-example/)

```
public interface MainContractor {
    interface View {
        void showResult();

        void setResultURL(String url);

    }

    interface Presenter {

        void attachView(View view);    // <-- View interface 메서드 호출

        void detachView();

        void loadURL(Context context, String url);
    }

    interface GetServerResponse {

        interface OnFinishedListener {
            void onFinished(String resultURL);
            void onFailure(Throwable t);
        }

        void getNoticeURL(OnFinishedListener onFinishedListener, String url);
    }
}

public class MainPresenter implements MainContractor.Presenter, MainContractor.GetServerResponse.OnFinishedListener{

    private MainContractor.View view;
    private MainContractor.GetServerResponse getNoticeIntractor;

    public MainPresenter(MainContractor.View view, MainContractor.GetServerResponse getNoticeIntractor) {
        this.view = view;
        this.getNoticeIntractor = getNoticeIntractor;
    }

    @Override
    public void attachView(MainContractor.View view) {
        this.view = view;
    }

    @Override
    public void detachView() {view = null;}

    @Override
    public void loadURL(Context context, String url) {
        getNoticeIntractor.getNoticeURL(this,url);
    }

    @Override
    public void onFinished(String resultURL) {
        view.setResultURL(resultURL);
    }

    @Override
    public void onFailure(Throwable t) {
        Log.e("network onFailure",""+t.toString());
    }
}
```

([코드 출처](https://junghun0.github.io/2019/05/22/android-mvp/))
