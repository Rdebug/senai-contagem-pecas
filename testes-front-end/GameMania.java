package encontro_remoto;

import org.junit.Before;
import org.junit.Test;
import org.junit.After;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TesteEncontroRemoto {
	
	private WebDriver driver;

	@Before
	public void configurarTeste() {
		System.setProperty("webdriver.chrome.driver", "chromedriver");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
//		driver.quit();
	}
	
	@Test
	public void testeNavegabilidade() {
		try {
		driver.get("http://localhost:4200/");
		Thread.sleep(2000);
		driver.findElement(By.id("login")).click();
		Thread.sleep(2000);
		driver.findElement(By.id("email")).sendKeys("ramon@senai.com");
		driver.findElement(By.id("password")).sendKeys("senha");
		Thread.sleep(2000);
		driver.findElement(By.id("submit")).click();
		Thread.sleep(2000);
		
		}catch(InterruptedException e) {
		e.printStackTrace();
	
		}
	}
	
	@After
	public void Fim() {
		driver.quit();
	}
}
