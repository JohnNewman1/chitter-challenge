package com.chitter;

import static org.hamcrest.CoreMatchers.containsString;
import static org.junit.Assert.*;

import com.chitter.Peep;
import org.junit.Test;

public class PeepTest {

	private Peep peep = new Peep("hello");

	@Test
	public void postHasContent() {
		assertThat(peep.getPeep(), containsString("hello"));
	}

}
