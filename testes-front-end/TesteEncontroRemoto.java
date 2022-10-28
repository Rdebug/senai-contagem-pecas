package encontro_remoto;

import org.junit.Before;
import org.junit.Test;
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
		driver.get("https://informatica.sp.senai.br");
		driver.findElement(By.id("Busca1_txtFiltro")).sendKeys("Excel");
		driver.findElement(By.id("Busca1_btnBusca")).click();
		
	}
	
//	@After
	
}
